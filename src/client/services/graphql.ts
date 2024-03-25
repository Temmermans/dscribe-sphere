class GraphQLService {
  private url: string;
  constructor(url: string) {
    this.url = url;
  }

  async query(query: string, variables?: any) {
    const access_token = localStorage.getItem("dscribe_access_token");
    const response = await fetch(this.url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
        "x-dscribe-calling-service": "web-app",
      },
      body: JSON.stringify({ query, variables }),
    });

    return await response.json();
  }
}

export default new GraphQLService("https://dscribe.dscribedata.com/api/graphql");
