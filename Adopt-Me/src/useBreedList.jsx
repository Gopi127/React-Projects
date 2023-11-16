import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

function useBreedList(animal) {
  const result = useQuery(["breeds", animal], fetchBreedList);

  return [result?.data?.breeds ?? [], result.status];
}
export default useBreedList;
