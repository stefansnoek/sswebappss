# resource "azurerm_postgresql_flexible_server" "pg" {
#     name = "sswebappss-pgserver"
#     resource_group_name = azurerm_resource_group.rg.name
#     location = azurerm_resource_group.rg.location
#     version = "16"
#     administrator_login = "pgadmin"
#     administrator_password = "Password1234!"

#     sku_name = "B_Standard_B1ms"
#     geo_redundant_backup_enabled = false
#     public_network_access_enabled = true
# }

# resource "azurerm_postgresql_flexible_server_database" "pgdb" {
#     name = "sswebappss-pgdb"
#     server_id = azurerm_postgresql_flexible_server.pg.id
# }