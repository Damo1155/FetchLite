import { stringify } from "query-string";

export async function Get<TOutput>(endpoint: string): Promise<TOutput>;
export async function Get<TInput, TOutput>(endpoint: string, request: TInput): Promise<TOutput>;

export async function Get<TInput, TOutput>(endpoint: string, request: TInput = null): Promise<TOutput> {
    const url = request ? `${endpoint}?${stringify(request)}` : endpoint;

    const response = await fetch(url);

    if (!response.ok) {
        throw response as Response;
    }

    const responseText = await response.text();

    // Ensures a valid response has been sent back in the event of a void.
    return responseText ? JSON.parse(responseText) : null;
}