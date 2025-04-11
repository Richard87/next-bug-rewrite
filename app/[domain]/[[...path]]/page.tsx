import { getData } from "@/app/server";
import Link from "next/link";

type Props = { params: Promise<{ domain: string; path?: string[] }> }

/** Add your relevant code here for the issue to reproduce */
export default function Page(props: Props) {
  return <Home {...props} />;
}

async function Home(props: Props) {
  const { domain, path } = await props.params;
  const {data} = await getData(domain, path);
  return (
    <div>
      <h1>{data}</h1>
      <Link href={"/some-page"}>Some page</Link>
    </div>
  );
}