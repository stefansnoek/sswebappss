provider "azurerm" {
    features {}
}

resource "azurerm_resource_group" "rg" {
    name = "sswebappss-rg"
    location = "North Europe"
}

resource "azurerm_container_registry" "acr" {
    name = "sswebappssacr"
    resource_group_name = azurerm_resource_group.rg.name
    location = azurerm_resource_group.rg.location
    sku = "Basic"
    admin_enabled = true
}