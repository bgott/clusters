with open('./cities', 'r') as infile, open('./latlongs', 'a') as outfile:
    for line in infile:
        arr = line.split()
        arr = arr[(len(arr)-2):]
        latlong = "lat: {}, lng: {}\n".format(arr[0], arr[1])
        outfile.write(latlong)
infile.close()
outfile.close()
