"use server"

export async function getData
(domain: string, path?: string[]) {
    await new Promise((resolve) => {setTimeout(resolve, 1000)});
    return {
        hello: "Hello World",
        domain,
        path: path?.join("/"),
    };
}