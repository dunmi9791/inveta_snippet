from odoo import models, fields

class Ad(models.Model):
    _name = 'ads.inveta'
    _description = 'Ad Information'

    name = fields.Char('Ad Name', required=True)
    image = fields.Binary('Ad Image')
    link = fields.Char('Advertiser Link')
    start_date = fields.Datetime("Start Date")
    end_date = fields.Datetime("End Date")
    text_to_display = fields.Text("Description")
    active = fields.Boolean("Active")
    bg_color = fields.Char("Banner Background Color")
    text_color = fields.Char("Banner Text Color")
    btn_color = fields.Char("Button Background Color")
    btn_txt_color = fields.Char("Button Text Color")
