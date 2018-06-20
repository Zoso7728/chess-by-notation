import { filter } from 'lodash'

export const getByColor = (arrOfObjs, color) => filter(arrOfObjs, { color })
export const getByType = (arrOfObjs, type) => filter(arrOfObjs, { type })
export const getAvailablePieces = pieces => filter(pieces, { captured: false })
