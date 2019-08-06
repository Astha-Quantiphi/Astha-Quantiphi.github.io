package com.jsonApi.contoller;

import org.codehaus.jackson.map.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.List;
import java.util.Map;


public class csvToJson {
    public static void main(String[] args)throws Exception {

        File input = new File("ML-Data Collection - another 77.csv");
        File output = new File("data.json");
        List<Map<?, ?>> data = readObjectsFromCSV(input);
        writeAsJson(data, output);
    }
    public static List<Map<?,?>> readObjectsFromCSV(File file)throws IOException{
        File file1= new File("ML-Data Collection - another 77.csv");

        List<String> lines= Files.readAllLines(file1.toPath(), StandardCharsets.UTF_8);

                for (String line : lines) {
                    String[] array = line.split(",", -1);
                    System.out.println(array[0]);
                }
                return null;
    }
    public static void writeAsJson(List<Map<?,?>> data, File file)throws IOException{
        ObjectMapper mapper= new ObjectMapper();
        mapper.writeValue(file, data);
    }
}

