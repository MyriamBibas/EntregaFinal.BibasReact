class ProductManager {
    constructor() {
        this.products = [];
        this.autoIncrementId = 1;
    }

    addProduct(productData) {
        const { title, description, price, thumbnail, code, stock } = productData;
        
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error("Todos los campos son obligatorios.");
        }

        if (this.products.some((product) => product.code === code)) {
            throw new Error("El código ya está en uso: " + code);
        }

        const newProduct = {
            id: this.autoIncrementId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (!product) {
            throw new Error("Producto no encontrado.");
        }
        return product;
    }
}

const manager = new ProductManager();

try {
    manager.addProduct({
        title: "remera",
        description: "remera roja de algodón",
        price: 100,
        thumbnail: "https://pin.it/4lYiGPs",
        code: "ABC123",
        stock: 50,
    });

    manager.addProduct({
        title: "jean",
        description: "jean cargo",
        price: 150,
        thumbnail: "https://pin.it/31CMjSV",
        code: "DEF456",
        stock: 30
    });

    manager.addProduct({
        title: "Gorra",
        description: "gorra NY varios colores",
        price: 150,
        thumbnail: "https://pin.it/3X2a6Ld",
        code: "3MJFO7",
        stock: 30,
    });
    
    manager.addProduct({
        title: "Buso Rosa",
        description: "Buso de algodón color rosa",
        price: 200,
        thumbnail: "https://pin.it/3mDRpRW",
        code: "MNO345",
        stock: 40
    });

    console.log("Productos:", manager.getProducts());

    const product = manager.getProductById(1);
    console.log("Producto encontrado:", product);

    manager.getProductById(3); // Esto lanzará una excepción si el producto no se encuentra
} catch (error) {
    console.error(error.message);
}

