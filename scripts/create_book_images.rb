require 'json'
require 'down'
require 'fileutils'

def file_extension(filename)
  return filename.split('.').pop()
end

def local_name(title, filename)
  safe_title = title.downcase.gsub(/[^0-9a-z ]/, '').gsub(/ /, '_')
  ext = file_extension(filename)
  return "#{safe_title}.#{ext}"
end

def run()
  book_data_file = './_data/books.json'
  file = File.read(book_data_file)
  books = JSON.parse(file)
  
  books.each do |book|
    tempfile = Down.download(book['image_url'])
    local_name = local_name(book['title'], tempfile.original_filename)
    puts "Downloaded: #{tempfile.original_filename} => #{local_name}"
    web_image_path = "/img/shop/books/#{local_name}"
    FileUtils.mv(tempfile.path, ".#{web_image_path}")
    book['web_image_path'] = web_image_path
  end

  puts "Updating #{book_data_file}"
  File.write(book_data_file, JSON.pretty_generate(books))
end

run()
