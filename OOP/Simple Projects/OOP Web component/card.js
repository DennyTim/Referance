const API_KEY = 'U1VN1X6Jd5b0jKc3aXRaSnj09R3TwNAR';
const url = `http://api.giphy.com/v1/gifs/trending?api_key=` + API_KEY + `&limit=1`;

class CardComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.getElementById('card-view');
    const templateInstance = template.content.cloneNode(true);
    shadow.appendChild(templateInstance);
  }

  async connectedCallback() {
    this.gifObj = await this.fetchFromGiphy();
    this.render(this, this.gifObj);
  }

  async fetchFromGiphy() {
    const res = await fetch(url);
    const json = await res.json();

    const gifUrl = json['data']['0'].images['fixed_height_small'].url;
    const gifName = json['data']['0'].title;
    const gifObject = {
      name: gifName,
      url: gifUrl
    }
    return gifObject;
  }

  render(shadowElem, data) {
    const shadowRoot = shadowElem.shadowRoot;
    shadowRoot.getElementById('card-title').innerHTML = data.name;
    shadowRoot.getElementById('gif-view').src = data.url;
  }
}

customElements.define('card-component', CardComponent);