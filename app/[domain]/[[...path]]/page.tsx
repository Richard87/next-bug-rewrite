import { getData } from "@/app/server";
import { Suspense } from "react";

type Props = { params: Promise<{ domain: string; path?: string[] }> }

/** Add your relevant code here for the issue to reproduce */
export default async function Page(props: Props) {
  return <Suspense fallback={<div>Loading...</div>}>
      <Home {...props} />
    </Suspense>;
}

async function Home(props: Props) {
  const { domain, path } = await props.params;
  const {data} = await getData(domain, path);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}