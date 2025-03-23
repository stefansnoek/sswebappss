resource "azurerm_container_registry" "acr" {
    name = "sswebappssacr"
    resource_group_name = azurerm_resource_group.rg.name
    location = azurerm_resource_group.rg.location
    sku = "Basic"
    admin_enabled = false
}

resource "azurerm_subnet" "aks_subnet" {
    depends_on = [azurerm_virtual_network.vnet]
    name = "sswebappss-aks-subnet"
    resource_group_name = azurerm_resource_group.rg.name
    virtual_network_name = azurerm_virtual_network.vnet.name
    address_prefixes = ["10.0.1.0/24"]
}

resource "azurerm_kubernetes_cluster" "aks" {
    depends_on = [azurerm_virtual_network.vnet]
    name = "sswebappss-aks"
    location = azurerm_resource_group.rg.location
    resource_group_name = azurerm_resource_group.rg.name
    dns_prefix = "sswebappss-aks"

    default_node_pool {
        name = "default"
        node_count = 1
        vm_size = "Standard_B2ms"
        vnet_subnet_id = azurerm_subnet.aks_subnet.id
    }

    network_profile {
        network_plugin = "azure"
        service_cidr = "10.1.0.0/16"
        dns_service_ip = "10.1.0.10"
    }

    identity {
        type = "SystemAssigned"
    }
}

resource "azurerm_role_assignment" "aks_acr" {
    principal_id         = azurerm_kubernetes_cluster.aks.kubelet_identity[0].object_id
    role_definition_name = "AcrPull"
    scope               = azurerm_container_registry.acr.id
}