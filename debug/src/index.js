import {func1} from '@utils/util1';
import {func2} from '../utils/util2';
import ruios from './loader.ruios';

import './style.css'


func2();

func1();

ruios();

import(/* webpackChunkName: "lazy1" */ '@utils/lazy').then(_ => _.func());
import(/* webpackChunkName: "lazy2" */ '@utils/lazy2').then(_ => _.func());
