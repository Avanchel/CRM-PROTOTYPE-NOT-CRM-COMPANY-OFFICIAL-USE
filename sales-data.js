// ==========================
// SALES DATA
// ==========================
window.allSales = [
    // your 150 sales records here
    // example:
    // { id: 1, customer: "Juan", product: "Drone X", amount: 1200 }
    { saleId: 'DR-1001', date: '2026-01-01', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 3, unitPrice: 759, region: 'North America' },
    { saleId: 'DR-1002', date: '2026-01-02', droneModel: 'Skydio X10', category: 'Enterprise', units: 1, unitPrice: 15000, region: 'Europe' },
    { saleId: 'DR-1003', date: '2026-01-02', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 5, unitPrice: 1099, region: 'Asia-Pacific' },
    { saleId: 'DR-1004', date: '2026-01-03', droneModel: 'Autel Evo Lite+', category: 'Prosumer', units: 2, unitPrice: 1249, region: 'North America' },
    { saleId: 'DR-1005', date: '2026-01-04', droneModel: 'DJI Neo', category: 'Beginner', units: 12, unitPrice: 199, region: 'Europe' },
    { saleId: 'DR-1006', date: '2026-01-05', droneModel: 'DJI Matrice 350', category: 'Enterprise', units: 1, unitPrice: 12500, region: 'South America' },
    { saleId: 'DR-1007', date: '2026-01-05', droneModel: 'Potensic Atom', category: 'Beginner', units: 8, unitPrice: 299, region: 'Asia-Pacific' },
    { saleId: 'DR-1008', date: '2026-01-06', droneModel: 'Parrot Anafi USA', category: 'Enterprise', units: 2, unitPrice: 7000, region: 'North America' },
    { saleId: 'DR-1009', date: '2026-01-07', droneModel: 'DJI Mavic 3 Pro', category: 'Prosumer', units: 4, unitPrice: 2199, region: 'Europe' },
    { saleId: 'DR-1010', date: '2026-01-08', droneModel: 'Freefly Alta X', category: 'Industrial', units: 1, unitPrice: 18200, region: 'North America' },
    { saleId: 'DR-1011', date: '2026-01-09', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 2, unitPrice: 759, region: 'Asia-Pacific' },
    { saleId: 'DR-1012', date: '2026-01-10', droneModel: 'DJI Neo', category: 'Beginner', units: 10, unitPrice: 199, region: 'South America' },
    { saleId: 'DR-1013', date: '2026-01-11', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 3, unitPrice: 1099, region: 'Middle East' },
    { saleId: 'DR-1014', date: '2026-01-12', droneModel: 'Autel Evo Lite+', category: 'Prosumer', units: 4, unitPrice: 1249, region: 'Europe' },
    { saleId: 'DR-1015', date: '2026-01-13', droneModel: 'Skydio X10', category: 'Enterprise', units: 1, unitPrice: 15000, region: 'Asia-Pacific' },
    { saleId: 'DR-1016', date: '2026-01-14', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 5, unitPrice: 759, region: 'North America' },
    { saleId: 'DR-1017', date: '2026-01-15', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 2, unitPrice: 1099, region: 'Europe' },
    { saleId: 'DR-1018', date: '2026-01-16', droneModel: 'Potensic Atom', category: 'Beginner', units: 15, unitPrice: 299, region: 'Asia-Pacific' },
    { saleId: 'DR-1019', date: '2026-01-17', droneModel: 'DJI Neo', category: 'Beginner', units: 20, unitPrice: 199, region: 'North America' },
    { saleId: 'DR-1020', date: '2026-01-18', droneModel: 'DJI Matrice 350', category: 'Enterprise', units: 1, unitPrice: 12500, region: 'Europe' },
    { saleId: 'DR-1021', date: '2026-01-19', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 4, unitPrice: 759, region: 'Middle East' },
    { saleId: 'DR-1022', date: '2026-01-20', droneModel: 'DJI Mavic 3 Pro', category: 'Prosumer', units: 2, unitPrice: 2199, region: 'South America' },
    { saleId: 'DR-1023', date: '2026-01-21', droneModel: 'Skydio X10', category: 'Enterprise', units: 1, unitPrice: 15000, region: 'North America' },
    { saleId: 'DR-1024', date: '2026-01-22', droneModel: 'DJI Neo', category: 'Beginner', units: 8, unitPrice: 199, region: 'Europe' },
    { saleId: 'DR-1025', date: '2026-01-23', droneModel: 'Autel Evo Lite+', category: 'Prosumer', units: 3, unitPrice: 1249, region: 'Asia-Pacific' },
    { saleId: 'DR-1026', date: '2026-01-24', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 7, unitPrice: 759, region: 'North America' },
    { saleId: 'DR-1027', date: '2026-01-25', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 4, unitPrice: 1099, region: 'Europe' },
    { saleId: 'DR-1028', date: '2026-01-26', droneModel: 'Potensic Atom', category: 'Beginner', units: 6, unitPrice: 299, region: 'South America' },
    { saleId: 'DR-1029', date: '2026-01-27', droneModel: 'DJI Neo', category: 'Beginner', units: 25, unitPrice: 199, region: 'Middle East' },
    { saleId: 'DR-1030', date: '2026-01-28', droneModel: 'DJI Matrice 350', category: 'Enterprise', units: 1, unitPrice: 12500, region: 'Asia-Pacific' },
    { saleId: 'DR-1031', date: '2026-01-29', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 3, unitPrice: 759, region: 'North America' },
    { saleId: 'DR-1032', date: '2026-01-30', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 5, unitPrice: 1099, region: 'Europe' },
    { saleId: 'DR-1033', date: '2026-01-31', droneModel: 'Skydio X10', category: 'Enterprise', units: 1, unitPrice: 15000, region: 'Asia-Pacific' },
    { saleId: 'DR-1034', date: '2026-02-01', droneModel: 'DJI Neo', category: 'Beginner', units: 14, unitPrice: 199, region: 'North America' },
    { saleId: 'DR-1035', date: '2026-02-02', droneModel: 'Autel Evo Lite+', category: 'Prosumer', units: 2, unitPrice: 1249, region: 'Europe' },
    { saleId: 'DR-1036', date: '2026-02-03', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 4, unitPrice: 759, region: 'South America' },
    { saleId: 'DR-1037', date: '2026-02-04', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 3, unitPrice: 1099, region: 'Middle East' },
    { saleId: 'DR-1038', date: '2026-02-05', droneModel: 'Potensic Atom', category: 'Beginner', units: 9, unitPrice: 299, region: 'North America' },
    { saleId: 'DR-1039', date: '2026-02-06', droneModel: 'DJI Neo', category: 'Beginner', units: 11, unitPrice: 199, region: 'Europe' },
    { saleId: 'DR-1040', date: '2026-02-07', droneModel: 'DJI Matrice 350', category: 'Enterprise', units: 1, unitPrice: 12500, region: 'Asia-Pacific' },
    { saleId: 'DR-1041', date: '2026-02-08', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 2, unitPrice: 759, region: 'North America' },
    { saleId: 'DR-1042', date: '2026-02-09', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 6, unitPrice: 1099, region: 'Europe' },
    { saleId: 'DR-1043', date: '2026-02-10', droneModel: 'Skydio X10', category: 'Enterprise', units: 1, unitPrice: 15000, region: 'South America' },
    { saleId: 'DR-1044', date: '2026-02-11', droneModel: 'DJI Neo', category: 'Beginner', units: 18, unitPrice: 199, region: 'Middle East' },
    { saleId: 'DR-1045', date: '2026-02-12', droneModel: 'Autel Evo Lite+', category: 'Prosumer', units: 5, unitPrice: 1249, region: 'Asia-Pacific' },
    { saleId: 'DR-1046', date: '2026-02-13', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 4, unitPrice: 759, region: 'North America' },
    { saleId: 'DR-1047', date: '2026-02-14', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 2, unitPrice: 1099, region: 'Europe' },
    { saleId: 'DR-1048', date: '2026-02-15', droneModel: 'Potensic Atom', category: 'Beginner', units: 7, unitPrice: 299, region: 'South America' },
    { saleId: 'DR-1049', date: '2026-02-16', droneModel: 'DJI Neo', category: 'Beginner', units: 22, unitPrice: 199, region: 'North America' },
    { saleId: 'DR-1050', date: '2026-02-17', droneModel: 'DJI Matrice 350', category: 'Enterprise', units: 1, unitPrice: 12500, region: 'Europe' },
    { saleId: 'DR-1051', date: '2026-02-18', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 3, unitPrice: 759, region: 'Asia-Pacific' },
    { saleId: 'DR-1052', date: '2026-02-19', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 4, unitPrice: 1099, region: 'Middle East' },
    { saleId: 'DR-1053', date: '2026-02-20', droneModel: 'Skydio X10', category: 'Enterprise', units: 1, unitPrice: 15000, region: 'North America' },
    { saleId: 'DR-1054', date: '2026-02-21', droneModel: 'DJI Neo', category: 'Beginner', units: 10, unitPrice: 199, region: 'Europe' },
    { saleId: 'DR-1055', date: '2026-02-22', droneModel: 'Autel Evo Lite+', category: 'Prosumer', units: 3, unitPrice: 1249, region: 'South America' },
    { saleId: 'DR-1056', date: '2026-02-23', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 6, unitPrice: 759, region: 'North America' },
    { saleId: 'DR-1057', date: '2026-02-24', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 5, unitPrice: 1099, region: 'Asia-Pacific' },
    { saleId: 'DR-1058', date: '2026-02-25', droneModel: 'Potensic Atom', category: 'Beginner', units: 12, unitPrice: 299, region: 'Europe' },
    { saleId: 'DR-1059', date: '2026-02-26', droneModel: 'DJI Neo', category: 'Beginner', units: 30, unitPrice: 199, region: 'North America' },
    { saleId: 'DR-1060', date: '2026-02-27', droneModel: 'DJI Matrice 350', category: 'Enterprise', units: 1, unitPrice: 12500, region: 'South America' },
    { saleId: 'DR-1061', date: '2026-02-28', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 2, unitPrice: 759, region: 'Middle East' },
    { saleId: 'DR-1062', date: '2026-03-01', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 3, unitPrice: 1099, region: 'North America' },
    { saleId: 'DR-1063', date: '2026-03-02', droneModel: 'Skydio X10', category: 'Enterprise', units: 1, unitPrice: 15000, region: 'Europe' },
    { saleId: 'DR-1064', date: '2026-03-03', droneModel: 'DJI Neo', category: 'Beginner', units: 15, unitPrice: 199, region: 'Asia-Pacific' },
    { saleId: 'DR-1065', date: '2026-03-04', droneModel: 'Autel Evo Lite+', category: 'Prosumer', units: 4, unitPrice: 1249, region: 'North America' },
    { saleId: 'DR-1066', date: '2026-03-05', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 5, unitPrice: 759, region: 'Europe' },
    { saleId: 'DR-1067', date: '2026-03-06', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 2, unitPrice: 1099, region: 'South America' },
    { saleId: 'DR-1068', date: '2026-03-07', droneModel: 'Potensic Atom', category: 'Beginner', units: 8, unitPrice: 299, region: 'Middle East' },
    { saleId: 'DR-1069', date: '2026-03-08', droneModel: 'DJI Neo', category: 'Beginner', units: 12, unitPrice: 199, region: 'North America' },
    { saleId: 'DR-1070', date: '2026-03-09', droneModel: 'DJI Matrice 350', category: 'Enterprise', units: 1, unitPrice: 12500, region: 'Europe' },
    { saleId: 'DR-1071', date: '2026-03-10', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 4, unitPrice: 759, region: 'Asia-Pacific' },
    { saleId: 'DR-1072', date: '2026-03-11', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 6, unitPrice: 1099, region: 'North America' },
    { saleId: 'DR-1073', date: '2026-03-12', droneModel: 'Skydio X10', category: 'Enterprise', units: 1, unitPrice: 15000, region: 'South America' },
    { saleId: 'DR-1074', date: '2026-03-13', droneModel: 'DJI Neo', category: 'Beginner', units: 20, unitPrice: 199, region: 'Europe' },
    { saleId: 'DR-1075', date: '2026-03-14', droneModel: 'Autel Evo Lite+', category: 'Prosumer', units: 3, unitPrice: 1249, region: 'Middle East' },
    { saleId: 'DR-1076', date: '2026-03-15', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 7, unitPrice: 759, region: 'North America' },
    { saleId: 'DR-1077', date: '2026-03-16', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 4, unitPrice: 1099, region: 'Europe' },
    { saleId: 'DR-1078', date: '2026-03-17', droneModel: 'Potensic Atom', category: 'Beginner', units: 10, unitPrice: 299, region: 'Asia-Pacific' },
    { saleId: 'DR-1079', date: '2026-03-18', droneModel: 'DJI Neo', category: 'Beginner', units: 25, unitPrice: 199, region: 'South America' },
    { saleId: 'DR-1080', date: '2026-03-19', droneModel: 'DJI Matrice 350', category: 'Enterprise', units: 1, unitPrice: 12500, region: 'North America' },
    { saleId: 'DR-1081', date: '2026-03-20', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 3, unitPrice: 759, region: 'Europe' },
    { saleId: 'DR-1082', date: '2026-03-21', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 5, unitPrice: 1099, region: 'Middle East' },
    { saleId: 'DR-1083', date: '2026-03-22', droneModel: 'Skydio X10', category: 'Enterprise', units: 1, unitPrice: 15000, region: 'Asia-Pacific' },
    { saleId: 'DR-1084', date: '2026-03-23', droneModel: 'DJI Neo', category: 'Beginner', units: 14, unitPrice: 199, region: 'North America' },
    { saleId: 'DR-1085', date: '2026-03-24', droneModel: 'Autel Evo Lite+', category: 'Prosumer', units: 2, unitPrice: 1249, region: 'Europe' },
    { saleId: 'DR-1086', date: '2026-03-25', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 4, unitPrice: 759, region: 'South America' },
    { saleId: 'DR-1087', date: '2026-03-26', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 3, unitPrice: 1099, region: 'Asia-Pacific' },
    { saleId: 'DR-1088', date: '2026-03-27', droneModel: 'Potensic Atom', category: 'Beginner', units: 9, unitPrice: 299, region: 'North America' },
    { saleId: 'DR-1089', date: '2026-03-28', droneModel: 'DJI Neo', category: 'Beginner', units: 11, unitPrice: 199, region: 'Europe' },
    { saleId: 'DR-1090', date: '2026-03-29', droneModel: 'DJI Matrice 350', category: 'Enterprise', units: 1, unitPrice: 12500, region: 'Middle East' },
    { saleId: 'DR-1091', date: '2026-03-30', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 2, unitPrice: 759, region: 'South America' },
    { saleId: 'DR-1092', date: '2026-03-31', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 6, unitPrice: 1099, region: 'North America' },
    { saleId: 'DR-1093', date: '2026-04-01', droneModel: 'Skydio X10', category: 'Enterprise', units: 1, unitPrice: 15000, region: 'Europe' },
    { saleId: 'DR-1094', date: '2026-04-02', droneModel: 'DJI Neo', category: 'Beginner', units: 18, unitPrice: 199, region: 'Asia-Pacific' },
    { saleId: 'DR-1095', date: '2026-04-03', droneModel: 'Autel Evo Lite+', category: 'Prosumer', units: 5, unitPrice: 1249, region: 'North America' },
    { saleId: 'DR-1096', date: '2026-04-04', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 4, unitPrice: 759, region: 'Europe' },
    { saleId: 'DR-1097', date: '2026-04-05', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 2, unitPrice: 1099, region: 'South America' },
    { saleId: 'DR-1098', date: '2026-04-06', droneModel: 'Potensic Atom', category: 'Beginner', units: 7, unitPrice: 299, region: 'Middle East' },
    { saleId: 'DR-1099', date: '2026-04-07', droneModel: 'DJI Neo', category: 'Beginner', units: 22, unitPrice: 199, region: 'Asia-Pacific' },
    { saleId: 'DR-1100', date: '2026-04-08', droneModel: 'DJI Matrice 350', category: 'Enterprise', units: 1, unitPrice: 12500, region: 'North America' },
    { saleId: 'DR-1101', date: '2026-04-09', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 3, unitPrice: 759, region: 'Europe' },
    { saleId: 'DR-1102', date: '2026-04-10', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 4, unitPrice: 1099, region: 'South America' },
    { saleId: 'DR-1103', date: '2026-04-11', droneModel: 'Skydio X10', category: 'Enterprise', units: 1, unitPrice: 15000, region: 'North America' },
    { saleId: 'DR-1104', date: '2026-04-12', droneModel: 'DJI Neo', category: 'Beginner', units: 10, unitPrice: 199, region: 'Middle East' },
    { saleId: 'DR-1105', date: '2026-04-13', droneModel: 'Autel Evo Lite+', category: 'Prosumer', units: 3, unitPrice: 1249, region: 'Asia-Pacific' },
    { saleId: 'DR-1106', date: '2026-04-14', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 6, unitPrice: 759, region: 'Europe' },
    { saleId: 'DR-1107', date: '2026-04-15', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 5, unitPrice: 1099, region: 'North America' },
    { saleId: 'DR-1108', date: '2026-04-16', droneModel: 'Potensic Atom', category: 'Beginner', units: 12, unitPrice: 299, region: 'South America' },
    { saleId: 'DR-1109', date: '2026-04-17', droneModel: 'DJI Neo', category: 'Beginner', units: 30, unitPrice: 199, region: 'Europe' },
    { saleId: 'DR-1110', date: '2026-04-18', droneModel: 'DJI Matrice 350', category: 'Enterprise', units: 1, unitPrice: 12500, region: 'Asia-Pacific' },
    { saleId: 'DR-1111', date: '2026-04-19', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 2, unitPrice: 759, region: 'North America' },
    { saleId: 'DR-1112', date: '2026-04-20', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 3, unitPrice: 1099, region: 'Middle East' },
    { saleId: 'DR-1113', date: '2026-04-21', droneModel: 'Skydio X10', category: 'Enterprise', units: 1, unitPrice: 15000, region: 'South America' },
    { saleId: 'DR-1114', date: '2026-04-22', droneModel: 'DJI Neo', category: 'Beginner', units: 15, unitPrice: 199, region: 'Europe' },
    { saleId: 'DR-1115', date: '2026-04-23', droneModel: 'Autel Evo Lite+', category: 'Prosumer', units: 4, unitPrice: 1249, region: 'Asia-Pacific' },
    { saleId: 'DR-1116', date: '2026-04-24', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 5, unitPrice: 759, region: 'North America' },
    { saleId: 'DR-1117', date: '2026-04-25', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 2, unitPrice: 1099, region: 'Europe' },
    { saleId: 'DR-1118', date: '2026-04-26', droneModel: 'Potensic Atom', category: 'Beginner', units: 8, unitPrice: 299, region: 'South America' },
    { saleId: 'DR-1119', date: '2026-04-27', droneModel: 'DJI Neo', category: 'Beginner', units: 12, unitPrice: 199, region: 'Middle East' },
    { saleId: 'DR-1120', date: '2026-04-28', droneModel: 'DJI Matrice 350', category: 'Enterprise', units: 1, unitPrice: 12500, region: 'Asia-Pacific' },
    { saleId: 'DR-1121', date: '2026-04-29', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 4, unitPrice: 759, region: 'North America' },
    { saleId: 'DR-1122', date: '2026-04-30', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 6, unitPrice: 1099, region: 'Europe' },
    { saleId: 'DR-1123', date: '2026-05-01', droneModel: 'Skydio X10', category: 'Enterprise', units: 1, unitPrice: 15000, region: 'South America' },
    { saleId: 'DR-1124', date: '2026-05-02', droneModel: 'DJI Neo', category: 'Beginner', units: 20, unitPrice: 199, region: 'Middle East' },
    { saleId: 'DR-1125', date: '2026-05-03', droneModel: 'Autel Evo Lite+', category: 'Prosumer', units: 3, unitPrice: 1249, region: 'Asia-Pacific' },
    { saleId: 'DR-1126', date: '2026-05-04', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 7, unitPrice: 759, region: 'North America' },
    { saleId: 'DR-1127', date: '2026-05-05', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 4, unitPrice: 1099, region: 'Europe' },
    { saleId: 'DR-1128', date: '2026-05-06', droneModel: 'Potensic Atom', category: 'Beginner', units: 10, unitPrice: 299, region: 'South America' },
    { saleId: 'DR-1129', date: '2026-05-07', droneModel: 'DJI Neo', category: 'Beginner', units: 25, unitPrice: 199, region: 'Middle East' },
    { saleId: 'DR-1130', date: '2026-05-08', droneModel: 'DJI Matrice 350', category: 'Enterprise', units: 1, unitPrice: 12500, region: 'Asia-Pacific' },
    { saleId: 'DR-1131', date: '2026-05-09', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 3, unitPrice: 759, region: 'North America' },
    { saleId: 'DR-1132', date: '2026-05-10', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 5, unitPrice: 1099, region: 'Europe' },
    { saleId: 'DR-1133', date: '2026-05-11', droneModel: 'Skydio X10', category: 'Enterprise', units: 1, unitPrice: 15000, region: 'South America' },
    { saleId: 'DR-1134', date: '2026-05-12', droneModel: 'DJI Neo', category: 'Beginner', units: 14, unitPrice: 199, region: 'Middle East' },
    { saleId: 'DR-1135', date: '2026-05-13', droneModel: 'Autel Evo Lite+', category: 'Prosumer', units: 2, unitPrice: 1249, region: 'Asia-Pacific' },
    { saleId: 'DR-1136', date: '2026-05-14', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 4, unitPrice: 759, region: 'North America' },
    { saleId: 'DR-1137', date: '2026-05-15', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 3, unitPrice: 1099, region: 'Europe' },
    { saleId: 'DR-1138', date: '2026-05-16', droneModel: 'Potensic Atom', category: 'Beginner', units: 9, unitPrice: 299, region: 'South America' },
    { saleId: 'DR-1139', date: '2026-05-17', droneModel: 'DJI Neo', category: 'Beginner', units: 11, unitPrice: 199, region: 'Middle East' },
    { saleId: 'DR-1140', date: '2026-05-18', droneModel: 'DJI Matrice 350', category: 'Enterprise', units: 1, unitPrice: 12500, region: 'Asia-Pacific' },
    { saleId: 'DR-1141', date: '2026-05-19', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 2, unitPrice: 759, region: 'North America' },
    { saleId: 'DR-1142', date: '2026-05-20', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 6, unitPrice: 1099, region: 'Europe' },
    { saleId: 'DR-1143', date: '2026-05-21', droneModel: 'Skydio X10', category: 'Enterprise', units: 1, unitPrice: 15000, region: 'South America' },
    { saleId: 'DR-1144', date: '2026-05-22', droneModel: 'DJI Neo', category: 'Beginner', units: 18, unitPrice: 199, region: 'Middle East' },
    { saleId: 'DR-1145', date: '2026-05-23', droneModel: 'Autel Evo Lite+', category: 'Prosumer', units: 5, unitPrice: 1249, region: 'Asia-Pacific' },
    { saleId: 'DR-1146', date: '2026-05-24', droneModel: 'DJI Mini 4 Pro', category: 'Consumer', units: 4, unitPrice: 759, region: 'North America' },
    { saleId: 'DR-1147', date: '2026-05-25', droneModel: 'DJI Air 3S', category: 'Prosumer', units: 2, unitPrice: 1099, region: 'Europe' },
    { saleId: 'DR-1148', date: '2026-05-26', droneModel: 'Potensic Atom', category: 'Beginner', units: 7, unitPrice: 299, region: 'South America' },
    { saleId: 'DR-1149', date: '2026-05-27', droneModel: 'DJI Neo', category: 'Beginner', units: 22, unitPrice: 199, region: 'Middle East' },
    { saleId: 'DR-1150', date: '2026-05-28', droneModel: 'DJI Matrice 350', category: 'Enterprise', units: 1, unitPrice: 12500, region: 'Asia-Pacific' }
];

// ==========================
// SETTINGS
// ==========================
// ==========================
// SETTINGS
// ==========================
const SALES_PER_PAGE = 10;


// ==========================
// RENDER SALES TABLE
// ==========================
window.renderSales = function (salesData, page = 1) {

    const tableBody = document.getElementById("sales-table-body");
    if (!tableBody) return;

    const totalItems = salesData.length;
    const totalPages = Math.ceil(totalItems / SALES_PER_PAGE);

    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    const startIndex = (page - 1) * SALES_PER_PAGE;
    const endIndex = startIndex + SALES_PER_PAGE;

    const pageItems = salesData.slice(startIndex, endIndex);

    let html = "";

    pageItems.forEach(sale => {
        html += `
            <tr>
                <td>${sale.saleId}</td>
                <td>${sale.date}</td>
                <td>${sale.droneModel}</td>
                <td>${sale.category}</td>
                <td>${sale.units}</td>
                <td>$${sale.unitPrice}</td>
                <td>${sale.region}</td>
            </tr>
        `;
    });

    tableBody.innerHTML = html;

    renderSalesPagination(totalItems, page, SALES_PER_PAGE);
};


// ==========================
// PAGINATION
// ==========================
function renderSalesPagination(totalItems, currentPage, itemsPerPage) {

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationContainer = document.getElementById("sales-pagination");
    if (!paginationContainer) return;

    let html = `
        <button class="p-btn"
            ${currentPage === 1 ? 'disabled' : ''}
            onclick="renderSales(allSales, ${currentPage - 1})">
            Previous
        </button>
        <div class="pages">
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `
            <span class="page ${i === currentPage ? 'active' : ''}"
                onclick="renderSales(allSales, ${i})">
                ${i}
            </span>
        `;
    }

    html += `
        </div>
        <button class="p-btn"
            ${currentPage === totalPages ? 'disabled' : ''}
            onclick="renderSales(allSales, ${currentPage + 1})">
            Next
        </button>
    `;

    paginationContainer.innerHTML = html;

    if (window.lucide) lucide.createIcons();
}


// ==========================
// INIT
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    if (window.allSales?.length) {
        renderSales(window.allSales, 1);
    }
});
