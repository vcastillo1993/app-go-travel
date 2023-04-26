import axios from "axios"

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng) => {
  try {
    const listdata = await axios.get('https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete', {
      params: { query: 'eiffel tower', lang: 'en_US', units: 'km' },
      headers: {
        'X-RapidAPI-Key': 'de76adedf9msh0649b11ab46ff8cp1aa35bjsn22598a56f423',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    })
    return listdata.data
  } catch (error) {
    return null
  }
}