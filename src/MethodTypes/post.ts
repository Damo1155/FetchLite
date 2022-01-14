import { FetchRequest } from "Services/FetchService";

export async function Post<TOutput>(endpoint: string): Promise<TOutput>;
export async function Post<TInput, TOutput>(endpoint: string, request: TInput): Promise<TOutput>;
export async function Post<TInput, TOutput>(endpoint: string, request: TInput, headers: Headers): Promise<TOutput>;

export async function Post<TInput, TOutput>(endpoint: string, request: TInput = null, headers: Headers = null): Promise<TOutput> {
    const response = await FetchRequest("POST", endpoint, headers, request);

    if (!response.ok) {
        throw response as Response;
    }

    const responseText = await response.text();

    // Purpose  :   Null check to ensure a response with valid JSON has been sent back in the event of a void.
    return responseText ? JSON.parse(responseText) : null;
}