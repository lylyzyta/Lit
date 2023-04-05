import { LitElement, html, css } from 'lit';

export class Primer_Componente extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <h1>Mi primer componente</h1>`;
    }
}
customElements.define('primer_componente', Primer_Componente);
