"use server"

export async function getData
(domain: string, path?: string[]) {
    await new Promise((resolve) => {setTimeout(resolve, 1000)});
    return {
        data: `Hello World: ${domain} ${path?.join("/")}`,
    };
}