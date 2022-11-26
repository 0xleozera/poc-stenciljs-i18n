import { Component, Prop, State, Listen, h } from '@stencil/core'
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

  @State() dynamicLocale: Locale = this.locale

  @Listen('click', { capture: true })
  handleToggleLocale() {
    this.dynamicLocale = this.dynamicLocale === 'pt' ? 'en' : 'pt'
  }

  render() {
    return (
      <div>
        <ul>
          <li>{t('test', this.dynamicLocale)}</li>
          <li>
            {t('helloWorld', this.dynamicLocale, {
              first: this.first,
              last: this.last,
            })}
          </li>
          <li>{t('welcome', this.dynamicLocale, { first: this.first })}</li>
          <li>
            {t('foo.bar', this.dynamicLocale, {
              first: this.first,
              last: this.last,
            })}
          </li>
        </ul>
        <button>Toggle Locale</button>
      </div>
    )
  }
}
