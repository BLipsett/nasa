import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { NasaImage } from '../models/NasaImage'
import axios from 'axios'

class NasaService {
  async findImage() {
    const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=b0wmhPrdpoxD5SkdmrKRCNiNZxXPidg9Zi6wgENT&date=' + AppState.currentQuery)

    AppState.nasaImage = new NasaImage(res.data)
    logger.log(AppState.nasaImage)
  }
}

export const nasaService = new NasaService()
