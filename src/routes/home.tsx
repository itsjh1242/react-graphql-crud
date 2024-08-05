import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { GetAllLocationOutput, useCreateLocationMutation, useGetLocationsQuery } from "@/graphql/generated";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Schema
const createLocationFormSchema = z.object({
  placeName: z.string().min(2, { message: "Place Name must be at least  character" }),
  placeVisitorCount: z.number().min(0, { message: "Visitor count must be a positive number" }),
});
type CreateLocationFormInputs = z.infer<typeof createLocationFormSchema>;

export const Home = () => {
  const [locations, setLocations] = useState<GetAllLocationOutput>();

  // Get All Locations
  const {
    data: allLocationData,
    loading: allLocationsLoading,
    error: allLocationsError,
    refetch,
  } = useGetLocationsQuery({
    onCompleted: (data) => {
      setLocations(data.getAllLocation);
    },
  });

  // Create Location Mutation
  const [createLocationMutation, { error: createLocationError }] = useCreateLocationMutation();

  // UseForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateLocationFormInputs>({
    resolver: zodResolver(createLocationFormSchema),
  });

  // useEffect to update locations state when data changes
  useEffect(() => {
    if (allLocationData?.getAllLocation) {
      setLocations(allLocationData.getAllLocation);
    }
  }, [allLocationData]);

  // Create location Function
  const onCreateLocation = async (data: CreateLocationFormInputs) => {
    try {
      const res = await createLocationMutation({
        variables: {
          CreateLocationInput: {
            placeName: data.placeName,
            placeVisitorCount: data.placeVisitorCount,
          },
        },
      });

      if (res.data?.createLocation) {
        console.log(res.data?.createLocation);
        await refetch();
        reset();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col p-12">
      <p className="text-2xl font-bold">All Locations</p>
      <div className="flex flex-wrap gap-8 mt-4">
        {locations?.locations?.map((location) => (
          <Card key={location.placeNumber}>
            <CardHeader className="font-bold text-lg">{location.placeName}</CardHeader>
            <CardContent className="flex flex-col items-start">
              <p>Location Number: {location.placeNumber}</p>
              <p>Location Visitor: {location.placeVisitorCount}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {allLocationsLoading && <p>Loading...</p>}
      {allLocationsError && <p>Error: {allLocationsError.message}</p>}

      {/* 위치 생성 폼 */}
      <div className="mt-8">
        <p className="text-2xl font-bold">Create Location</p>
        <form onSubmit={handleSubmit(onCreateLocation)} className="flex flex-col gap-4 mt-4">
          <div>
            <label>Place Name</label>
            <input type="text" {...register("placeName")} className="w-full p-2 border rounded" />
            {errors.placeName && <p className="text-red-500">{errors.placeName.message}</p>}
          </div>
          <div>
            <label>Visitor Count</label>
            <input type="number" {...register("placeVisitorCount", { valueAsNumber: true })} className="w-full p-2 border rounded" />
            {errors.placeVisitorCount && <p className="text-red-500">{errors.placeVisitorCount.message}</p>}
          </div>
          {createLocationError && <p className="text-red-500">Error: {createLocationError.message}</p>}
          <button type="submit" className="p-2 bg-green-500 text-white rounded">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};
