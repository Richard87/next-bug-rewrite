import { getData } from "@/app/server";
import Link from "next/link";

type Props = { params: Promise<{ domain: string; path?: string[] }> }

/** Add your relevant code here for the issue to reproduce */
export default function Page(props: Props) {
  return <Home {...props} />;
}

async function Home(props: Props) {
  const { domain, path } = await props.params;
  const data = await getData(domain, path);
  return (
    <div>
      <h1>Msg: {data.hello}</h1>
      <h2>Domain: {data.domain}</h2>
      <h3>Path: {data.path}</h3>
      <Link href={"/"}>Navigating to Root works</Link>
      <br/><br/>
      <Link href={"/some-page"}>Some page</Link>
      <br/><br/>
      <Link href={"/test/some-page"}>Some Sub page is also broken</Link>
    </div>
  );
}