# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request
from datetime import timedelta, datetime

class AdController(http.Controller):
    @http.route(['/ads'], type='json', auth='public', methods=['POST'])
    def get_ads(self):
        ads = request.env['ads.inveta'].search_read([], ['name', 'image', 'link', 'start_date', 'end_date', 'text_to_display', 'active',])
        return ads
        # cont=''
        # return ads.read(['name', 'image', 'link', 'start_date', 'end_date', 'text_to_display', 'active',
        #                  'bg_color', 'text_color', 'btn_color', 'btn_txt_color'])

        # current_date = datetime.strptime(str(datetime.today().strftime("%Y-%m-%d %H:%M:%S")), '%Y-%m-%d %H:%M:%S')
        # if ads:
        #     for ad in ads:
        #         start_date = datetime.strptime(str(ad.start_date), '%Y-%m-%d %H:%M:%S')
        #         end_date = datetime.strptime(str(ad.end_date), '%Y-%m-%d %H:%M:%S')
        #         bg_color = ad.bg_color
        #         text_color = ad.text_color
        #         btn_color = ad.btn_color
        #         btn_txt_color = ad.btn_txt_color
        #         if current_date >= start_date and current_date <= end_date:
        #             cont+="""
        #                         <h2 id="text" style="text-align:center">""" + str(ad.name) + """</h1>
        #                         <p id="text2" style="text-align:center">""" + str(ad.text_to_display) + """</p>
        #                         <a href='""" + str(ad.url) + """' class="btn btn-primary" id="button" style="text-align:center" >Click to View</a>
        #                         <br /><br />
        #                     """
        #
        # return cont+',,,' + bg_color + ',,,' + text_color + ',,,' + btn_color + ',,,' + btn_txt_color

