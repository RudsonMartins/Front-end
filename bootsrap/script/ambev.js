lista_category =[]

class Category{
    constructor(titulo,imagem,desc,marca){
        this.titulo = titulo;
        this.imagem = imagem;
        this.desc = desc;
        this.marca = marca;
    }
};
lista_category.push(new Category('original','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));
lista_category.push(new Category('Brahma','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));
lista_category.push(new Category('Brahma','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));
lista_category.push(new Category('Brahma','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));
lista_category.push(new Category('Brahma','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));
lista_category.push(new Category('Brahma','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));
lista_category.push(new Category('Brahma','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));
lista_category.push(new Category('Brahma','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));
lista_category.push(new Category('Brahma','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));
lista_category.push(new Category('Brahma','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));
lista_category.push(new Category('Brahma','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));
lista_category.push(new Category('Brahma','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));
lista_category.push(new Category('Brahma','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));
lista_category.push(new Category('Brahma','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));
lista_category.push(new Category('Brahma','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));
lista_category.push(new Category('Brahma','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));
lista_category.push(new Category('Brahma','/imagens/ant-mangue-seco 1.png','perfeito equilíbrio entre sabor e refresncância.-melhor cerveja do Brasil em teste cego com consumidores.-tradição dos botecos brasileiros desde 1931.','@AMBEV'));


lista_category.forEach(Category =>{
    document.querySelector('#categoriaItems').innerHTML += `
     <div class="card mb-5 mx-3 mt-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${Category.imagem}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${Category.titulo}</h5>
                                <p class="card-text"> ${Category.desc}
                                </p>
                                <p class="card-text"><small class="text-body-secondary">${Category.marca}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>`;
});
