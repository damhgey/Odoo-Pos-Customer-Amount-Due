# -*- coding: utf-8 -*-
{
    'name': 'POS Clients Amount Due',
    'version': '1.0',
    'category': 'Sales/Point of Sale',
    'summary': 'Pos Clients Amounts Due ',
    'author': 'Ahmed Alsayed Aldamhogy',
    'description': """
        It’s an Odoo 15 Feature in POS to get customer that has due amount in
        their account by clicking a button in customer screen to be able
        to settle their due amount with a specific payment method.
    """,
    'depends': ['point_of_sale'],
    'data': [],
    'installable': True,
    'assets': {
        'point_of_sale.assets': [
            'pos_clients_amount_due/static/src/js/**/*',
        ],
        'web.assets_qweb': [
            'pos_clients_amount_due/static/src/xml/**/*',
        ],
    },
}
