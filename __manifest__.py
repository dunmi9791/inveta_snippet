# -*- coding: utf-8 -*-
{
    'name': "inveta_snippet",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "My Company",
    'website': "https://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Theme',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'website'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
        'views/footer.xml',
        'views/snippets/ads_section.xml',
        'views/snippets/dynamic_ads_section.xml',
        'views/snippets/testai.xml',
        'views/snippets/snippets.xml',

    ],
    'assets':{
        'web.assets_frontend': [
            'inveta_snippet/static/src/scss/styles.scss',
            'inveta_snippet/static/src/js/ads.js',
            'inveta_snippet/static/src/js/youtube_video_carousel.js',
            'inveta_snippet/static/src/css/youtube_video_carousel.css',

        ],
        # 'web._assets_primary_variables': [
        #     'inveta_snipet/static/src/scss/primary_variables.scss',
        # ]
    },
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}
