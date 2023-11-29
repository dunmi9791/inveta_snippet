# -*- coding: utf-8 -*-
# from odoo import http


# class InvetaSnippet(http.Controller):
#     @http.route('/inveta_snippet/inveta_snippet', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/inveta_snippet/inveta_snippet/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('inveta_snippet.listing', {
#             'root': '/inveta_snippet/inveta_snippet',
#             'objects': http.request.env['inveta_snippet.inveta_snippet'].search([]),
#         })

#     @http.route('/inveta_snippet/inveta_snippet/objects/<model("inveta_snippet.inveta_snippet"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('inveta_snippet.object', {
#             'object': obj
#         })
