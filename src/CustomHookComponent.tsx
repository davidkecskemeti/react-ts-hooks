import { useEffect, useMemo, useState } from "react";

interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

interface IUseFetchData<Payload> {
  data: Payload | null;
  done: boolean;
}
function useFetchData<Payload>(url: string): IUseFetchData<Payload> {
  const [data, setData] = useState<Payload | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data: Payload) => {
        setData(data);
        setDone(true);
      });
  }, [url]);

  return {
    data,
    done,
  };
}

function CustomHookComponent() {
  const { data, done } = useFetchData<Beverage[]>("/hv-taplist.json");
  const portlandTaps = useMemo(
    () =>
      (data || []).filter((beverage) =>
        beverage.producerLocation.includes("Portland")
      ),
    [data]
  );
  return (
    <div>
      {portlandTaps.length && (
        <img src={portlandTaps![0].logo} alt="Beverage logo" />
      )}
    </div>
  );
}

export default CustomHookComponent;
