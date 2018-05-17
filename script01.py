with open('./cities', 'r') as infile, open('./latlongs', 'a') as outfile:
    for line in infile:
        arr = line.split()
        arr = arr[(len(arr)-2):]
        latlong = "lat: {}, lng: {}".format(arr[0], arr[1])
        latlong = "{" + latlong + "}, \n"
        outfile.write(latlong)
infile.close()
outfile.close()
