import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  GetAllLocationOutput,
  useCreateLocationMutation,
  useGetLocationLazyQuery,
  useGetLocationsQuery,
  GetLocationOutput,
  useDeleteLocationMutation,
  useUpdateLocationVisitorCountMutation,
  UpdateLocationVisitorCountInput,
} from "@/graphql/generated";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Schema
const createLocationFormSchema = z.object({
  placeName: z.string().min(2, { message: "Place Name must be at least  character" }),
  placeVisitorCount: z.number().min(0, { message: "Visitor count must be a positive number" }),
});
type CreateLocationFormInputs = z.infer<typeof createLocationFormSchema>;

const getLocationFormSchema = z.object({
  placeNumber: z.number().min(0, { message: "Place number must be a positive number" }),
});
type GetLocationFormInputs = z.infer<typeof getLocationFormSchema>;

export const Home = () => {
  const [locations, setLocations] = useState<GetAllLocationOutput>();
  const [searchedLocation, setSearchedLocation] = useState<GetLocationOutput>();

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
  // Lazy Get Location Query
  const [getLocationQuery, { error: getLocationError }] = useGetLocationLazyQuery();
  // Delete Location Mutation
  const [deleteLocationMutation] = useDeleteLocationMutation();
  // Update Location Visitor Count Mutation
  const [updateLocationVisitorCountMutation] = useUpdateLocationVisitorCountMutation();

  // UseForm - Create Location
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: createLocationErrors },
  } = useForm<CreateLocationFormInputs>({
    resolver: zodResolver(createLocationFormSchema),
  });

  // useForm for Get Location
  const {
    register: getLocationRegister,
    handleSubmit: getLocationHandleSubmit,
    formState: { errors: getLocationErrors },
  } = useForm<GetLocationFormInputs>({
    resolver: zodResolver(getLocationFormSchema),
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
          input: {
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
  // Search location Function
  const onSearchLocation = async (data: GetLocationFormInputs) => {
    try {
      const res = await getLocationQuery({
        variables: {
          input: {
            placeNumber: data.placeNumber,
          },
        },
      });

      if (res.data?.getLocation) {
        setSearchedLocation(res.data.getLocation);
      }
    } catch (e) {
      console.error(e);
    }
  };
  // Delete location Function
  const onDeleteLocation = async (index: number) => {
    try {
      const res = await deleteLocationMutation({
        variables: {
          input: {
            placeNumber: index,
          },
        },
      });

      if (res.data?.deleteLocation) {
        console.log(res.data?.deleteLocation);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Update Location Function
  const onUpdateLocationVisitorCount = async (data: UpdateLocationVisitorCountInput) => {
    try {
      const res = await updateLocationVisitorCountMutation({
        variables: {
          input: {
            placeNumber: data.placeNumber,
            value: data.value,
          },
        },
      });

      if (res.data?.updateLocationVisitorCount) {
        console.log(res.data?.updateLocationVisitorCount);
        await refetch();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col p-12">
      <p className="text-3xl font-extrabold">React-GraphQL CRUD Operation</p>
      <p className="text-2xl font-bold">All Locations</p>
      <div className="flex flex-wrap gap-8 mt-4">
        {locations?.locations?.map((location) => (
          <Card key={location.placeNumber}>
            <CardHeader className="font-bold text-lg">{location.placeName}</CardHeader>
            <CardContent className="flex flex-col items-start">
              <p>Location Number: {location.placeNumber}</p>
              <p>Location Visitor: {location.placeVisitorCount}</p>
              <form className="flex gap-4 mt-4 w-full">
                <button
                  type="button"
                  onClick={() => {
                    onUpdateLocationVisitorCount({ placeNumber: location.placeNumber, value: -1 });
                  }}
                  className="p-2 bg-gray-500 text-white rounded"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onDeleteLocation(location.placeNumber);
                  }}
                  className="p-2 bg-red-500 text-white rounded"
                >
                  delete
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onUpdateLocationVisitorCount({ placeNumber: location.placeNumber, value: 1 });
                  }}
                  className="p-2 bg-gray-500 text-white rounded"
                >
                  +
                </button>
              </form>
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
            {createLocationErrors.placeName && <p className="text-red-500">{createLocationErrors.placeName.message}</p>}
          </div>
          <div>
            <label>Visitor Count</label>
            <input type="number" {...register("placeVisitorCount", { valueAsNumber: true })} className="w-full p-2 border rounded" />
            {createLocationErrors.placeVisitorCount && <p className="text-red-500">{createLocationErrors.placeVisitorCount.message}</p>}
          </div>
          {createLocationError && <p className="text-red-500">Error: {createLocationError.message}</p>}
          <button type="submit" className="p-2 bg-green-500 text-white rounded">
            Create
          </button>
        </form>
      </div>

      {/* Location Number로 위치 검색하기 */}
      <div className="mt-8">
        <p className="text-2xl font-bold">Search Location</p>
        <form onSubmit={getLocationHandleSubmit(onSearchLocation)} className="flex flex-col gap-4 mt-4">
          <div>
            <label>Place Number</label>
            <input type="number" {...getLocationRegister("placeNumber", { valueAsNumber: true })} className="w-full p-2 border rounded" />
            {getLocationErrors.placeNumber && <p className="text-red-500">Error: {getLocationErrors.placeNumber.message}</p>}
          </div>
          {getLocationError && <p className="text-red-500">Error: {getLocationError.message}</p>}
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Search
          </button>
        </form>

        {/* Display Searched Location */}
        {searchedLocation && (
          <div className="mt-4">
            <Card>
              <CardHeader className="font-bold text-lg">{searchedLocation.placeName}</CardHeader>
              <CardContent className="flex flex-col items-start">
                <p>Location Number: {searchedLocation.placeNumber}</p>
                <p>Location Visitor: {searchedLocation.placeVisitorCount}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
