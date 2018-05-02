cont=0
comments=0
application=0
array = Array.new
#Dir.foreach('/Users/gustavomorentin/Desktop/EJEMPLO') do |file|
File.open('/Users/gustavomorentin/Desktop/nuevo.html', 'r') do |f1|
    while linea = f1.gets
      array.push linea
    end
    while cont < array.size
    if array[cont].include?("<!--")
      comments+=1
    end
    if array[cont].include?("//") || array[cont].include?("//")
      application+=1
    end 
    cont+=1
  end

  print "Comentarios: ", comments
  puts " "
  print "Comentarios de aplicacion: ",application
  end
 
  #f = File.new("/Users/gustavomorentin/Desktop/nuevo.html")
  #f.seek(12, IO::SEEK_SET)
  #print f.readline()
  #f.close/
 
 
 
 
 
 
 
  # Crea un nuevo fichero, y escribe
  #File.open('text.txt', 'w') do |f2|
    # '\n' es el retorno de carro
   # f2.puts "Por que la vida \n puede ser maravillosa"
 # end