import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useGetLocationsQuery, useGetLocationQuery } from "@/graphql/generated";

// 폼 데이터의 타입을 정의합니다.
type FormData = {
  placeNumber: number;
};

export const Home = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [placeNumber, setPlaceNumber] = useState<number | null>(null);

  // 전체 위치 목록 쿼리
  const { data: allLocationsData, loading: allLocationsLoading, error: allLocationsError } = useGetLocationsQuery();

  // 특정 위치 쿼리
  const {
    data: locationData,
    loading: locationLoading,
    error: locationError,
  } = useGetLocationQuery({
    variables: {
      input: {
        placeNumber: Number(placeNumber) || 0,
      },
    }, // 기본값으로 0 설정 (placeNumber가 null일 때)
    skip: placeNumber === null, // placeNumber가 null일 때 쿼리 실행 건너뛰기
  });

  // onSubmit 함수의 타입을 SubmitHandler<FormData>로 지정합니다.
  const onSubmit: SubmitHandler<FormData> = (formData) => {
    setPlaceNumber(formData.placeNumber);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      {/* 폼 */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center mb-6 space-y-4">
        <input type="number" {...register("placeNumber", { required: true })} placeholder="Enter place number" className="p-2 border rounded" />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      {/* 전체 위치 목록 */}
      <div className="flex flex-col w-full max-w-lg">
        {allLocationsLoading ? (
          <p>Loading all locations...</p>
        ) : allLocationsError ? (
          <p>Error: {allLocationsError.message}</p>
        ) : allLocationsData?.getAllLocation.locations ? (
          allLocationsData.getAllLocation.locations.map((location) => (
            <div key={location.placeNumber} className="mb-4 p-4 border rounded">
              <h3>Name: {location.placeName}</h3>
              <p>Visitors: {location.placeVisitorCount}</p>
            </div>
          ))
        ) : (
          <p>No locations found</p>
        )}
      </div>

      {/* 특정 위치 정보 */}
      <div className="mt-6 w-full max-w-lg">
        {locationLoading ? (
          <p>Loading location...</p>
        ) : locationError ? (
          <p>Error: {locationError.message}</p>
        ) : locationData?.getLocation ? (
          <div className="p-4 border rounded">
            <h3>Name: {locationData.getLocation.placeName}</h3>
            <p>Visitors: {locationData.getLocation.placeVisitorCount}</p>
          </div>
        ) : (
          <p>No location data found</p>
        )}
      </div>
    </div>
  );
};
