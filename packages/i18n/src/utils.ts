import { path, replace } from 'ramda'

import pt from './configs/pt/translations.json' assert { type: 'json' }
import en from './configs/en/translations.json' assert { type: 'json' }
import config from './configs/translations.json' assert { type: 'json' }

export type Locale = 'pt' | 'pt_BR' | 'en' | 'en_US' | 'en-US' | 'pt-BR'
export type Params = Record<string, string>

function getCurrentLocale(locale: Locale) {
  const locales = {
    pt,
    en,
    config,
    pt_BR: pt,
    en_US: en,
    'pt-BR': pt,
    'en-US': en,
  }

  return locales[locale]
}

function removeDuplicateWords(
  key: string,
  oldPhrase: string,
  newPhrase: string,
) {
  const parseOldPhrase = replace(`{${key}}`, '', oldPhrase).split(' ')
  const parseNewPhrase = newPhrase.split(' ')
  const removeDuplicatedWords = new Set([...parseNewPhrase, ...parseOldPhrase])
  const resultPhrase = Array.from(removeDuplicatedWords).join(' ').trim()

  return resultPhrase
}

function normalizeTranslationValue(value: unknown, params: Params) {
  if (!value) return value

  const parsedParams = Object.entries(params)
  const normalizedTranslationValue = parsedParams.reduce(
    (prev, [key, value], index) => {
      const isFirstParams = index === 0
      const currentValue = isFirstParams ? value : prev
      const parseValue = replace(`{${key}}`, value, currentValue)

      if (isFirstParams) return parseValue

      return removeDuplicateWords(key, currentValue, parseValue)
    },
    '',
  )

  return normalizedTranslationValue
}

export function getTranslationValue(
  key: string,
  locale: Locale,
  params?: Params,
) {
  const currentLocale = getCurrentLocale(locale)
  const parsedKeys = key.split('.')
  const translationValue = path(parsedKeys, currentLocale)

  return !params
    ? translationValue
    : normalizeTranslationValue(translationValue, params)
}
