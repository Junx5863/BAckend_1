/**
 * @swagger
 * paths:
 *  /api/v1/product/:
 *    get:
 *      tags:
 *        - Productos
 *      summary: Trae todos los productos en listados
 *      requestBody:
 *        description: Trae todos los productos en listados
 *      parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *          type: integer
 *          example: 5
 *       - in: query
 *         name: page
 *         schema:
 *          type: integer
 *          example: 1
 *       - in: query
 *         name: platform
 *         description: Filtrar por plataforma
 *         schema:
 *          type: string
 *          example: Xbox - PlayStation
 * 
 *      responses:
 *        '200':
 *          description: 
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: String
 *                    description: Mensaje de respuesta
 *                    example: "All Products"
 *                  products:
 *                    type: array
 *                    description: Lista de productos
 *                    example: []
 *        '400':
 *          description: No trae datos
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    type: string
 *                    description: Error
 *                    example: "Error getting Products"
 *  
 *  
 *  /api/v1/product/add_new_game:
 *    post:
 *      tags:
 *        - Productos
 *      summary: Agrega un nuevo videojuego
 *      requestBody:
 *        description: Agraga un nuevo videojuego
 *        required: true
 *        content:
 *         application/json:
 *          schema:
 *           type: object
 *           properties:  
 *              title:
 *               type: string
 *               example: "Horizon Zero Down"
 *              platform:
 *               type: string
 *               example: "PlayStation"
 *              price:
 *               type: integer
 *               example: 19.88
 *              release_date:
 *               type: string
 *               example: "2018-04-20"
 *              genre:
 *               type: string
 *               example: "Action-adventure"
 *              description:
 *               type: string
 *               example: "Buen Juego....."
 *              status:
 *               type: string
 *               example: "Available"
 *              stock:
 *               type: number
 *               example: 2
 *      responses:
 *        '200':
 *          description: 
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "Video game added"
 *                  videoGame:
 *                    type: object
 *                    properties:
 *                      title:
 *                         type: string
 *                         example: "Horizon Zero Down"
 *                      platform:
 *                         type: string
 *                         example: "PlayStation"
 *                      price:
 *                         type: string
 *                         example: "19.88"
 *                      release_date:
 *                         type: string
 *                         example: "2018-04-20"
 *                      genre:
 *                         type: string
 *                         example: "Action-adventure"
 *                      description:
 *                         type: string
 *                         example: "Buen Juego....."
 *                      status:
 *                         type: string
 *                         example: "Available"
 *                      stock:
 *                         type: number
 *                         example: 2
 *  
 *        '400':
 *          description: No trae datos
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                    type: string
 *                    example: "Error adding video game"
 *  
 *  
 *  /api/v1/product/{id}:
 *      get:
 *        tags:
 *          - Productos
 *        summary: Trae un videojuego por su id
 *        parameters:
 *              - name: id
 *                in: path
 *                description: Id del videojuego
 *                required: true
 *        responses:
 *          200:
 *           description: Successful operation
 *           content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     properties:
 *                      id:
 *                       type: integer
 *                       example: 1
 *                      title:
 *                       type: string
 *                       example: Spiderman 2
 *                      platform:
 *                       type: string
 *                       example: PlayStation 4
 *                      price:
 *                       type: integer
 *                       example: 39.99
 *                      release_date:
 *                       type: string
 *                       example: 2021-09-10
 *                      genre:
 *                       type: string
 *                       example: Action
 *                      description:
 *                       type: string
 *                       example: God of War is a 2018 action-adventure game developed by Santa Monica Stud ...
 *                      status:
 *                       type: string
 *                       example: Available
 *                      stock:
 *                       type: integer
 *                       example: 2
 *  
 *  
 *          400:
 *            description: No trae datos
 *            content:
 *              application/json:
 *                 schema:
 *                    type: object
 *                    properties:
 *                         error:
 *                           type: string
 *                           example: "Game not found"
 *  
 *  
 *  /api/v1/product/update_game/{id}:
 *       put:
 *         tags:
 *           - Productos
 *         summary: Actualiza un videojuego por su id
 *         parameters:
 *              - name: id
 *                in: path
 *                description: Id del videojuego
 *                required: true
 *         requestBody:
 *           required: true
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                     example: "Horizon Zero Down"
 *                   platform:
 *                     type: string
 *                     example: "PlayStation"
 *                   price:
 *                     type: String
 *                     example: "19.88"
 *                   release_date:
 *                     type: string
 *                     example: "2018-04-20"
 *                   genre:
 *                     type: string
 *                     example: "Action-adventure"
 *                   description:
 *                     type: string
 *                     example: "Buen Juego....."
 *                   status:
 *                     type: string
 *                     example: "Available"
 *                   stock:
 *                     type: integer
 *                     example: 2
 *         responses:
 *           '201':
 *             description: Usuario registrado exitosamente
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: Video game updated
 *                     videoGame:                      
 *                       type: object
 *                       properties:
 *                         title:
 *                             type: string
 *                             example: "Horizon Zero Down"
 *                         platform:
 *                             type: string
 *                             example: "PlayStation"
 *                         price:
 *                             type: string
 *                             example: "19.88"
 *                         release_date:
 *                              type: string
 *                              example: "2018-04-20"
 *                         genre:
 *                              type: string
 *                              example: "Action-adventure"
 *                         description:
 *                              type: string
 *                              example: "Buen Juego....."
 *                         status:
 *                              type: string
 *                              example: "Available"
 *                         stock:
 *                              type: number
 *                              example: 2
 *           400':
 *             description: Error en la solicitud
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: Error updating video game
 *           404:
 *             description: Error en la solicitud
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: Video game not found
 *  
 *  
 *  /api/v1/product/delete_game/{id}:
 *        delete:
 *          tags:
 *           - Productos
 *          sumary: Elimina un videojuego por su id
 *          parameters:
 *              - name: id
 *                in: path
 *                description: Id del videojuego
 *                required: true
 *          responses:
 *                200:
 *                  description: Videojuego eliminado
 *                  content:
 *                      application/json:
 *                          schema:
 *                             type: object
 *                             properties:
 *                                  message:
 *                                      type: string
 *                                      example: Video game deleted
 *  
 *  /api/v1/create_carrito:
 *       post:
 *         tags:
 *           - Carrito
 *         summary: Crear Carrito
 *         requestBody:
 *           required: true
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   code_carrito:
 *                     type: string
 *                     example: Carrito 1     
 *                   productos:
 *                     type: Array
 *                     example: []
 *         responses:
 *           201:
 *             description: Carrito Creado Correctamente
 *             content:
 *               application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                       code_carrito:
 *                            type: string
 *                            example: Carrito 1     
 *                       productos:
 *                            type: Array
 *                            example: []
 *           400:
 *             description: Error al crear el carrito
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: Error al encontrar el carrito
 *           
 *  
 *  /api/v1/carrito/{id}:
 *       post:
 *         tags:
 *           - Carrito
 *         summary: Agregar un producto al carrito
 *         parameters:
 *              - name: id
 *                in: path
 *                description: Id del carrito
 *                required: true
 *         requestBody:
 *           required: true
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   product_id:
 *                     type: string
 *                     example: "66c692d9039fb237a8bb972e"     
 *                   quantity:
 *                     type: Integer
 *                     example: 2
 *         responses:
 *           201:
 *             description: Usuario registrado exitosamente
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: Producto agregado correctamente
 *                     videoGame:                      
 *                       type: object
 *           400:
 *             description: Error al encontrar el carrito
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: Error al encontrar el carrito
 *           404:
 *             description: Error al encontrar el producto
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: Error al encontrar el producto
 *   
 *  
 * 
 * /api/v1/carrito/{id}:
 *   delete:
 *     tags:
 *       - Carrito
 *     summary: Eliminar un producto del carrito
 *     description: Elimina un producto del carrito especificado utilizando el ID del carrito y el ID del producto (carrito_code).
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del carrito del que se eliminará el producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: string
 *                 description: ID del producto dentro del carrito (carrito_code._id)
 *                 example: "66c91a6c6e0497c512880e97"
 *     responses:
 *       '200':
 *         description: Producto eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *                   example: "Producto eliminado correctamente"
 *                 carrito:
 *                   type: object
 *                   description: Carrito actualizado después de la eliminación
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: ID del carrito
 *                     code_carrito:
 *                       type: string
 *                       example: "Carrito 1"
 *                     productos:
 *                       type: array
 *                       description: Lista de productos restantes en el carrito
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: 66c93ce22458e0e03c476151
 *                           carrito_code:
 *                             type: object
 *                             description: Detalles del producto en carrito_code
 *                             properties:
 *                               _id:
 *                                 type: string
 *                                 description: ID del producto
 *                                 example: 66c919246e0497c512880e91
 *                               title:
 *                                 type: string
 *                                 example: "The Last of Us Part II"
 *                               platform:
 *                                 type: string
 *                                 example: "PlayStation 4"
 *                               price:
 *                                 type: number
 *                                 format: float
 *                                 example: 59.99
 *                               release_date:
 *                                 type: string
 *                                 format: date-time
 *                                 example: "2020-06-19T00:00:00.000Z"
 *                               genre:
 *                                 type: string
 *                                 example: "Action-adventure"
 *                               description:
 *                                 type: string
 *                                 example: The Last of Us Part II es un videojuego de acción-aventura y ...
 *                               status:
 *                                 type: string
 *                                 example: "Available"
 *                               stock:
 *                                 type: number
 *                                 example: 5
 *                     __v:
 *                       type: number
 *                       description: Versión del documento
 *       '404':
 *         description: Carrito o producto no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Carrito no encontrado"
 *       '500':
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Error eliminando producto del carrito: [detalle del error]"
 * 
 * 
 * 
 * 
 * /api/v1/carrito/update/{id}:
 *   put:
 *     tags:
 *       - Carrito
 *     summary: Actualiza la cantidad de un producto en el carrito
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del carrito al que se desea actualiza el producto.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: string
 *                 description: ID del producto dentro del carrito (carrito_code._id)
 *                 example: "66c91a6c6e0497c512880e97"
 *               quantity:
 *                 type: integer
 *                 description: Nueva cantidad del producto
 *                 example: 4
 *     responses:
 *       '200':
 *         description: Producto eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *                   example: "Producto eliminado correctamente"
 *                 carrito:
 *                   type: object
 *                   description: Carrito actualizado después de la eliminación
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: ID del carrito
 *                     code_carrito:
 *                       type: string
 *                       example: "Carrito 1"
 *                     productos:
 *                       type: array
 *                       description: Lista de productos restantes en el carrito
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: 66c93ce22458e0e03c476151
 *                           cantidad:
 *                             type: integer
 *                             example: 9
 *                           carrito_code:
 *                             type: object
 *                             description: Detalles del producto en carrito_code
 *                             properties:
 *                               _id:
 *                                 type: string
 *                                 description: ID del producto
 *                                 example: 66c919246e0497c512880e91
 *                               title:
 *                                 type: string
 *                                 example: "The Last of Us Part II"
 *                               platform:
 *                                 type: string
 *                                 example: "PlayStation 4"
 *                               price:
 *                                 type: number
 *                                 format: float
 *                                 example: 59.99
 *                               release_date:
 *                                 type: string
 *                                 format: date-time
 *                                 example: "2020-06-19T00:00:00.000Z"
 *                               genre:
 *                                 type: string
 *                                 example: "Action-adventure"
 *                               description:
 *                                 type: string
 *                                 example: The Last of Us Part II es un videojuego de acción-aventura y ...
 *                               status:
 *                                 type: string
 *                                 example: "Available"
 *                               stock:
 *                                 type: number
 *                                 example: 5
 *                     __v:
 *                       type: number
 *                       description: Versión del documento
 *       '404':
 *         description: Carrito o producto no encontrado o cantidad requerida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Carrito no encontrado"
 *       '500':
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Error al actualizar el producto del carrito: [detalle del error]" 
 * 
 * 
 * 
 * 
 * /api/v1/carrito/empty/{id}:
 *   delete:
 *     tags:
 *       - Carrito
 *     summary: Elimina todos los productos del carrito
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del carrito al que se desea eliminar los productos.
 *     responses:
 *       '200':
 *         description: Elimina todos los productos que se encuentren en la lista de Productos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *                   example: Carrito vaciado correctamente
 *                 carrito:
 *                   type: object
 *                   description: Carrito vaciado correctamente
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: ID del carrito
 *                       example: 66c6ac35248b54c3ce3495d6
 *                     code_carrito:
 *                       type: string
 *                       example: "Carrito 1"
 *                     productos:
 *                       type: array
 *                       description: Lista de productos restantes en el carrito
 *                       example: []
 * 
 *                     __v:
 *                       type: number
 *                       description: Versión del documento
 *       '404':
 *         description: Carrito o producto no encontrado o cantidad requerida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Carrito no encontrado"
 *       '500':
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Error al actualizar el producto del carrito: [detalle del error]" 
 */