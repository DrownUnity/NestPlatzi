import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { UsersController } from './controllers/users.controller';
import { BrandController } from './controllers/brand.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, UsersController, BrandController],
  providers: [AppService],
})
export class AppModule {}
