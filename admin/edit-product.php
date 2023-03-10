<?php
include('../middleware/adminMiddleware.php');
include('includes/header.php');
?>

<div class="container-fluid mt-3 mb-4">
    <div class="row">
        <div class="col-md-12">
            <?php
            if (isset($_GET['id'])) {
                $id = $_GET['id'];
                $product_item = getByID("products", $id);

                if (mysqli_num_rows($product_item) > 0) {

                    $data = mysqli_fetch_array($product_item);
            ?>
                    <div class="card">
                        <div class="card-header">
                            <h2>Edit Product<a href="products.php" class="btn btn-primary shadow float-end button-text">Back</a></h2>
                        </div>
                        <hr class="light horizontal my-0">
                        <div class="card-body">
                            <form action="code.php" method="POST" enctype="multipart/form-data">
                                <div class="row">
                                    <div class="col-md-4">
                                        <label class="text-white my-2" for="">Select Category</label>
                                        <select name="category_id" class="form-select form-control form-control-lg">

                                            <?php
                                            $categories = getAll("categories");
                                            if (mysqli_num_rows($categories) > 0) {
                                                foreach ($categories as $item) {
                                            ?>
                                                    <option value="<?= $item['ID'] ?>" <?= $data['CategoryID'] ==  $item['ID'] ? 'selected' : '' ?>><?= $item['Name'] ?></option>
                                            <?php
                                                }
                                            } else {
                                                echo "<option>No Category Found</option>";
                                            }
                                            ?>
                                        </select>
                                    </div>
                                    <input type="hidden" name="product_id" value="<?= $data['ID'] ?>">
                                    <div class="col-md-4">
                                        <label class="text-white my-2" for="">Name</label>
                                        <div class="mb-3"><input class="form-control" type="text" name="name" placeholder="Enter Product Name" required value="<?= $data['Name'] ?>"></div>
                                    </div>
                                    <div class="col-md-4">
                                        <label class="text-white my-2" for="">Slug</label>
                                        <div class="mb-3"><input class="form-control" type="text" name="slug" placeholder="Enter Slug" required value="<?= $data['Slug'] ?>"></div>
                                    </div>
                                    <div class="col-md-4">
                                        <label class="text-white my-2" for="">Quantity</label>
                                        <div class="mb-3"><input class="form-control" type="number" name="quantity" placeholder="Enter Quantity" required value="<?= $data['Quantity'] ?>"></div>

                                    </div>
                                    <div class="col-md-4">
                                        <label class="text-white my-2" for="">Original Price</label>
                                        <div class="mb-3"><input class="form-control" type="number" step="0.01" name="original_price" placeholder="Enter Original Price" value="<?= $data['Original_Price'] ?>" required></div>
                                    </div>
                                    <div class="col-md-4">
                                        <label class="text-white my-2" for="">Selling Price</label>
                                        <div class="mb-3"> <input class="form-control" type="number" step="0.01" name="selling_price" placeholder="Enter Selling Price" value="<?= $data['Selling_Price'] ?>" required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="text-white my-2" for="">Small Description</label><br>
                                        <textarea class="form-control mb-2" name="small_description" placeholder="Enter Small Description" rows="3" required><?= $data['Description'] ?></textarea>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="text-white my-2" for="">Description</label><br>
                                        <textarea class="form-control mb-2" name="description" placeholder="Enter Description" rows="3" required><?= $data['Description'] ?></textarea>
                                    </div>
                                    <div class="col-md-6 d-flex align-items-center">
                                        <div>
                                            <label class="text-white" for="">Current Image</label><br>
                                            <img src="../uploads/<?= $data['Image'] ?>" alt="" width="100px" height="100px" style="object-fit: cover;">
                                        </div>
                                        <div class="mx-5">
                                            <label class="text-white" for="">Upload Image</label>
                                            <br>
                                            <input type="file" name="image"></input>
                                            <input type="hidden" name="old_image" value="<?= $data['Image'] ?>">
                                        </div>
                                    </div>
                                    <div class="col-md-6 category-checkbox-div my-auto">
                                        <label class="text-white" for="">Visibility & Popularity</label>
                                        <br>
                                        <input type="checkbox" class="category-checkbox" name="status" <?= $data['Status'] ? "checked" : "" ?>>
                                        <label class="checkbox-label" for="">Status</label>
                                        <input type="checkbox" class="category-checkbox" name="trending" <?= $data['Trending'] ? "checked" : "" ?>>
                                        <label class="checkbox-label" for="">Trending</label>
                                    </div>


                                    <div class="col-md-12">
                                        <label class="text-white my-2" for="">Meta Title</label>
                                        <div class="mb-3"><input class="form-control" type="text" name="meta_title" placeholder="Enter Meta Title" value="<?= $data['Meta_Title'] ?>" required></div>
                                    </div>
                                    <div class="col-md-12">
                                        <label class="text-white my-2" for="">Meta Description</label><br>
                                        <textarea class="form-control mb-2" name="meta_description" placeholder="Enter Meta Description" rows="3" required><?= $data['Meta_Description'] ?></textarea>
                                    </div>
                                    <div class="col-md-12">
                                        <label class="text-white my-2" for="">Meta Keywords</label><br>
                                        <textarea class="form-control mb-2" name="meta_keywords" placeholder="Enter Meta Keywords" rows="3" required><?= $data['Meta_Keywords'] ?></textarea>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mt-4"><button class="btn btn-info shadow d-block w-100" type="submit" name="update_product_btn">Update Product</button></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            <?php
                } else {
                    include('includes/404.php');
                }
            } else {
                include('includes/404.php');
            }
            ?>
        </div>

    </div>
</div>


</div>

<?php include('includes/footer.php') ?>