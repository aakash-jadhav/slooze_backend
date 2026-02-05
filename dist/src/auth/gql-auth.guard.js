"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlAuthGuard = void 0;
const passport_1 = require("@nestjs/passport");
const graphql_1 = require("@nestjs/graphql");
class GqlAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}
exports.GqlAuthGuard = GqlAuthGuard;
//# sourceMappingURL=gql-auth.guard.js.map