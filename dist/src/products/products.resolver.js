"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("../auth/gql-auth.guard");
const products_service_1 = require("./products.service");
const product_entity_1 = require("./entities/product.entity");
const create_product_input_1 = require("./dto/create-product.input");
const update_product_input_1 = require("./dto/update-product.input");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const dashboard_stats_entity_1 = require("./entities/dashboard-stats.entity");
const MANAGER = 'MANAGER';
const STORE_KEEPER = 'STORE_KEEPER';
let ProductsResolver = class ProductsResolver {
    constructor(productsService) {
        this.productsService = productsService;
    }
    products() {
        return this.productsService.findAll();
    }
    product(id) {
        return this.productsService.findOne(id);
    }
    dashboardStats() {
        return this.productsService.getStats();
    }
    createProduct(input) {
        return this.productsService.create(input);
    }
    updateProduct(id, input) {
        return this.productsService.update(id, input);
    }
};
exports.ProductsResolver = ProductsResolver;
__decorate([
    (0, graphql_1.Query)(() => [product_entity_1.Product]),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(MANAGER, STORE_KEEPER),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "products", null);
__decorate([
    (0, graphql_1.Query)(() => product_entity_1.Product, { nullable: true }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(MANAGER, STORE_KEEPER),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "product", null);
__decorate([
    (0, graphql_1.Query)(() => dashboard_stats_entity_1.DashboardStats),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(MANAGER),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "dashboardStats", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(MANAGER, STORE_KEEPER),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_input_1.CreateProductInput]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(MANAGER, STORE_KEEPER),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_input_1.UpdateProductInput]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "updateProduct", null);
exports.ProductsResolver = ProductsResolver = __decorate([
    (0, graphql_1.Resolver)(() => product_entity_1.Product),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsResolver);
//# sourceMappingURL=products.resolver.js.map