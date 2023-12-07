/** @odoo-module **/

import publicWidget from 'web.public.widget';

publicWidget.registry.Ads = publicWidget.Widget.extend({
    selector: '.banner_div',

    /**
     * @override
     */
    start() {
        let adRow = this.el.querySelector('#banner-space');

        if (adRow) {
            this._rpc({
                route: '/ads',
                params: {}
            }).then(data => {
                if (data.length > 0) {
                    // Select a random ad
                    const randomAd = data[Math.floor(Math.random() * data.length)];

                    // Build the HTML for the ad
                    let html = `<div class="banner-container-ads">
                            <a href="${randomAd.link}">
                                <img src="data:image/png;base64,${randomAd.image}" alt="Banner Image"
                                     class="banner-container-ads"/>
                            </a>
                        </div>`;

                    // Set the HTML content of the ad row
                    adRow.innerHTML = html;
                }
            });
        }
    },
});

export default publicWidget.registry.Ads;
