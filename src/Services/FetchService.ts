export function FetchRequest<TInput>(methodType: "GET" | "POST" | "PUT" | "DELETE", endpoint: string, headers: Headers, request: TInput = null): Promise<Response> {
    if (!headers) {
        headers = new Headers();
    }

    //headers.set(StandardRequestHeaders.ContentType, RequestHeaderValues.ApplicationJson);

    return fetch(
        `${endpoint}?`,
        {
            headers: headers,
            method: methodType,
            body: request ? JSON.stringify(request) : undefined
        } as RequestInit);
}