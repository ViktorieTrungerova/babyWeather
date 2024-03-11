class WeatherApiClient {

    async getData() {
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=49.3547&lon=17.8694&exclude=hourly,daily&appid=7fb42e5e75ac7e086e9a3d34d0f8f97c&lang=zh_cz`)
        return await response.json()
    }
}

export const weatherApi = new WeatherApiClient();