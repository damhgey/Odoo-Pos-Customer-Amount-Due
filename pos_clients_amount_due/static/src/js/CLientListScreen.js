odoo.define('pos_clients_amount_due.ClientListScreen', function (require) {
    'use strict';

    const ClientListScreen = require('point_of_sale.ClientListScreen');
    const Registries = require('point_of_sale.Registries');
    const { useListener } = require('web.custom_hooks');

    const PosDueClients = (ClientListScreen) =>
        class extends ClientListScreen {
            constructor() {
                super(...arguments);
                this.state.dueSearch =false ;
            }

        // Override get clients
        get clients() {
            let res;
            if (this.state.query && this.state.query.trim() !== '') {
                res = this.env.pos.db.search_partner(this.state.query.trim());
            }
            else if (this.state.dueSearch === true){
                res = this.getAmountDueClients()
            }
            else {
                res = this.env.pos.db.get_partners_sorted(1000);
            }
            return res.sort(function (a, b) { return (a.name || '').localeCompare(b.name || '') });
        }

        // Get amount due clients
        getAmountDueClients(){
            var clients = this.env.pos.db.partner_by_id;
            var dueClients = []

            for (let client in clients){
                if (clients[client].total_due > 0){
                    dueClients.push(clients[client])
                }
            }

            this.state.query = '';
            this.state.dueSearch = true;
            this.render();
            return dueClients;
        }

        };

    Registries.Component.extend(ClientListScreen, PosDueClients);
    return ClientListScreen;

});
