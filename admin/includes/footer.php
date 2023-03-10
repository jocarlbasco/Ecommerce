<footer class="footer">
    <div class="container-fluid">
        <div class="row align-items-center justify-content-lg-between">
            <div class="col-lg-6 mb-lg-0 mb-4">
                <div class="copyright text-center text-sm text-lg-start">
                    © <script>
                        document.write(new Date().getFullYear())
                    </script>,
                    made with <i class="fa fa-heart"></i> by
                    <a href="https://dev-jbagency.pantheonsite.io/" class="font-weight-bold" target="_blank">JBAgency</a>
                    for a better web.
                </div>
            </div>
            <div class="col-lg-6">
                <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                    <li class="nav-item">
                        <a href="../index.php" class="nav-link text-white" target="_blank">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="../about.php" class="nav-link text-white" target="_blank">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a href="../categories.php" class="nav-link text-white" target="_blank">Collections</a>
                    </li>
                    <li class="nav-item">
                        <a href="../blog.php" class="nav-link text-white" target="_blank">Blog</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
</div>
</main>

<script src="assets/js/jquery-3.6.3.min.js"></script>
<script src="assets/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/perfect-scrollbar.min.js"></script>
<script src="assets/js/smooth-scrollbar.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>
<script src="assets/js/custom.js"></script>

<!-- NotifyJS -->
<script src="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>
<script src="assets/js/notification.js"></script>

<!-- Data Tables -->
<script src="https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"></script>

<!-- SUMMER NOTES -->
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>



<!-- Display messages if category is successfully added or updated and if there is an error. -->
<script>
    <?php
    if (isset($_SESSION['message'])) {
        if ($_SESSION['message'] == "Category Added Successfully." || $_SESSION['message'] == "Category Updated Successfully." || $_SESSION['message'] == "Category Deleted Successfully." || $_SESSION['message'] == "Product Added Successfully." || $_SESSION['message'] == "Product Updated Successfully." || $_SESSION['message'] == "Order status updated successfully." || $_SESSION['message'] == "Welcome to Dashboard" || $_SESSION['message'] == "Post Added Successfully" || $_SESSION['message'] == "Post Updated Successfully.") {
    ?>
            $.notification(
                ["<?= $_SESSION['message'] ?>"], {
                    position: ['bottom', 'right'],
                    timeView: 3000,
                    messageType: 'success'
                }
            )

        <?php
            unset($_SESSION['message']);
        } else {
        ?>
            $.notification(
                ["<?= $_SESSION['message'] ?>"], {
                    position: ['bottom', 'right'],
                    timeView: 3000,
                    messageType: 'error'
                }
            )
    <?php
            unset($_SESSION['message']);
        }
    }

    ?>
</script>

</body>

</html>