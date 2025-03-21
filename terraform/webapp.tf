resource "azurerm_service_plan" "asp" {
    name                = "sswebappss-asp"
    location            = azurerm_resource_group.rg.location
    resource_group_name = azurerm_resource_group.rg.name
    os_type = "Linux"
    sku_name = "B1"
}

resource "azurerm_linux_web_app" "webapp" {
    name                = "sswebappss"
    resource_group_name = azurerm_resource_group.rg.name
    location           = azurerm_resource_group.rg.location
    service_plan_id    = azurerm_service_plan.asp.id

    site_config {
        always_on = true

        application_stack {
        docker_image_name   = "nginx:latest"
        docker_registry_url = "https://index.docker.io/v1/"
        }
    }
}
