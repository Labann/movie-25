export default async function fetchFn(url) {
    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${process.env.API_ACCESS_TOKEN}`
            }
        });
        const data = await res.json();
        if (data.status_message) {
            throw Error(data.status_message);
        }
        return data;
    }
    catch (error) {
        throw error.message;
    }
}
//# sourceMappingURL=fetchFn.js.map