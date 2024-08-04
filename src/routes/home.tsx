import { useGetLocationsQuery } from "@/graphql/generated";

export const Home = () => {
  const { data, loading, error } = useGetLocationsQuery();
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex justify-center items-center">
      {data?.getAllLocation.locations?.map((location) => (
        <div key={location.placeNumber}>
          <h3>Name: {location.placeName}</h3>
          <p>Visitors: {location.placeVisitorCount}</p>
        </div>
      ))}
    </div>
  );
};
