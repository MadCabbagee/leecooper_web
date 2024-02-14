import qrcode

features = qrcode.QRCODE(version=1, box_size=40, border=3)

features.add_data("https://www.youtube.com/Mr.Cooper")
features.add_data("https://www.instagram.com/leecooper.29")

features.add.data("https://www.youtube.com/@leecooper35/featured")


features.make(fit=True)
generate_image = features.make_image(fill_color="black", back_color="white")
generate_image = qrcode.make("leadbyexample", "Lee Cooper")
generate_image.save("qrcode.png")
