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
        if (res.status === 200) {
            return data;
        }
    }
    catch (error) {
        throw error.message;
    }
}
//# sourceMappingURL=fetchFn.js.map