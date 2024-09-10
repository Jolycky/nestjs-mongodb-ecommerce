import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { CustomerModule } from './customer/customer.module';
import { ItemModule } from './item/item.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-ecommerce'), // Update with your MongoDB connection string
    UserModule,
    RoleModule,
    CustomerModule,
    ItemModule,
    TransactionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
