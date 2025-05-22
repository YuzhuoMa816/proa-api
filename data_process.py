import csv
import os
from datetime import datetime

# map variable
def load_variable_map(filepath):
    variable_map = {}  # {(station_id, variable_name): var_id}
    with open(filepath, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            key = (int(row['id']), row['name'])
            variable_map[key] = int(row['var_id'])
    return variable_map


def convert_data_files(data_folder, variable_map, output_file):
    with open(output_file, 'w', newline='', encoding='utf-8') as out_csv:
        writer = csv.writer(out_csv)
        writer.writerow(['station_id','var_id', 'value', 'timestamp'])

        for i in range(1, 11):
            filename = f"data_{i}.csv"
            path = os.path.join(data_folder, filename)
            if not os.path.exists(path):
                print(f"file {filename} not exists")
                continue

            with open(path, newline='', encoding='utf-8') as infile:
                sample_line = infile.readline()
                delimiter = '\t' if '\t' in sample_line else ','
                infile.seek(0)
                reader = csv.DictReader(infile, delimiter=delimiter)

                for row in reader:
                    timestamp_str = row.get('timestamp') or row.get('Timestamp')
                    try:
                        timestamp = datetime.strptime(timestamp_str.strip(), "%d/%m/%Y %H:%M:%S")
                    except Exception as e:
                        print(f"time phrase error: {timestamp_str} -> {e}")
                        continue

                    for col in row:
                        if col.lower() == 'timestamp':
                            continue
                        var_id = variable_map.get((i, col))
                        if var_id is None:
                            print(f"⚠️ cant found var_id: station {i}, column '{col}'")
                            continue
                        value_str = row[col].strip()
                        if value_str == '':
                            continue
                        try:
                            value = float(value_str)
                            writer.writerow([i,var_id, value, timestamp.strftime('%Y-%m-%d %H:%M:%S')])
                        except ValueError:
                            print(f"⚠️ invalid: {value_str} (station {i}, column {col})")

    print(f"\n✅ finished {output_file}")



if __name__ == '__main__':

    variable_csv_path = '/Users/yuzhuoma/PyCharmMiscProject/variables.csv'
    data_folder_path = '/Users/yuzhuoma/PyCharmMiscProject/folder'
    output_csv_path = 'result.csv'

    variable_map = load_variable_map(variable_csv_path)
    convert_data_files(data_folder_path, variable_map, output_csv_path)