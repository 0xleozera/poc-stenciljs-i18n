import { Component, Prop, h } from '@stencil/core'
import { t } from 'i18n'

import { Locale } from './my-component.types'

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() first: string
  @Prop() last: string
  @Prop() locale: Locale = 'pt'

  render() {
    return (
      <ul>
        <li>{t('test', this.locale)}</li>
        <li>
          {t('helloWorld', this.locale, { first: this.first, last: this.last })}
        </li>
        <li>{t('welcome', this.locale, { first: this.first })}</li>
        <li>
          {t('foo.bar', this.locale, { first: this.first, last: this.last })}
        </li>
      </ul>
    )
  }
}
